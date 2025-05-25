"use client";

import { useState, useEffect } from "react";
import convert from "convert-units";
import { ArrowRightLeft } from "lucide-react";

const decimalPoints = [0, 1, 2, 3, 4, 5];

// 1. CategorySelector
function CategorySelector({ categories, selectedCategory, onChange }) {
  return (
    <div className="mb-6">
      <label
        htmlFor="category"
        className="block text-sm font-semibold mb-2 text-textAccent"
      >
        Select a Category
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-bg/50 dark:bg-bg border border-primary rounded-md px-4 py-2 text-sm text-textMain focus:outline-none focus:ring-2 focus:ring-primary transition"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

// 2. UnitSelector
function UnitSelector({ subUnits, fromUnit, toUnit, setFromUnit, setToUnit, onSwap }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div className="flex flex-col flex-1">
        <label className="text-sm font-semibold mb-2 text-textAccent">From</label>
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="w-full bg-bg/50 border border-primary rounded-md px-3 py-2 text-xs sm:text-sm text-textMain focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
          {subUnits.map((unit, i) => (
            <option key={i} value={unit.abbr}>
              ({unit.abbr}) {unit.plural}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={onSwap}
          title="Swap Units"
          className="p-2 rounded-full bg-primary text-white hover:shadow-glow transition shadow-md"
        >
          <ArrowRightLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col flex-1">
        <label className="text-sm font-semibold mb-2 text-textAccent">To</label>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="w-full bg-bg/50 border border-primary rounded-md px-3 py-2 text-xs sm:text-sm text-textMain focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
          {subUnits.map((unit, i) => (
            <option key={i} value={unit.abbr}>
              ({unit.abbr}) {unit.plural}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// 3. InputPrecision
function InputPrecision({ inputValue, setInputValue, precision, setPrecision }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-6">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 bg-bg/50 border border-primary rounded-md px-4 py-2 text-sm placeholder-textMuted text-textMain focus:outline-none focus:ring-2 focus:ring-primary transition"
        placeholder="Enter a value to convert"
      />
      <label className="mt-3 sm:mt-0 flex items-center text-sm whitespace-nowrap text-textAccent">
        Decimal places:
        <select
          value={precision}
          onChange={(e) => setPrecision(Number(e.target.value))}
          className="ml-2 bg-bg/50 border border-primary rounded-md px-2 py-1 text-xs sm:text-sm text-textMain focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
          {decimalPoints.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

// 4. ResultDisplay
function ResultDisplay({ inputValue, fromUnit, result, toUnit }) {
  if (result === "") return null;

  return (
    <div className="text-center text-lg font-semibold text-primary min-h-[2.5rem] mb-6">
      <p>
        {inputValue} {fromUnit} ={" "}
        <span className={result === "Invalid conversion" ? "text-red-500" : ""}>
          {result}
        </span>{" "}
        {toUnit}
      </p>
    </div>
  );
}

// 5. HistoryPanel
function HistoryPanel({ history, clearHistory, className }) {
  return (
    <aside
      className={`bg-muted rounded-lg p-4 shadow-inner text-textMuted overflow-y-auto ${className}`}
      style={{ minHeight: 0 }}
    >
      <h2 className="font-semibold mb-3">Recent Conversions</h2>
      {history.length === 0 && <p>No history yet.</p>}
      <ul className="text-xs space-y-2">
        {history.map((item, index) => (
          <li key={item.id} className="text-textMain flex gap-2 items-center">
            <span className="font-semibold text-primary min-w-[1.25rem] text-right">
              {index + 1}.
            </span>
            <span>
              {item.from} {item.fromUnit} → {item.to} {item.toUnit}
            </span>
          </li>
        ))}
      </ul>
      {history.length > 0 && (
        <button
          onClick={clearHistory}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-md py-2 transition"
        >
          Clear History
        </button>
      )}
    </aside>
  );
}

// 6. AdsPanel
function AdsPanel() {
  return (
    <aside className="order-3 lg:order-1 lg:basis-1/5 bg-muted rounded-lg p-4 shadow-inner text-textMuted text-center">
      {/* <h2 className="font-semibold mb-2">Ads</h2> */}
      {/* <p>Need help?</p> */}
    </aside>
  );
}

function CurrentUnitsInfo({ fromUnit, toUnit }) {
  let fromInfo, toInfo;
  try {
    fromInfo = convert().describe(fromUnit);
  } catch {
    fromInfo = null;
  }
  try {
    toInfo = convert().describe(toUnit);
  } catch {
    toInfo = null;
  }

  if (!fromInfo || !toInfo) return null;

  return (
    <div className="mb-4 p-3 bg-bg/30 dark:bg-bg/20 rounded-md text-textMain text-sm">
      <div>
        Current Units:
      </div>
      <div>
        <strong>From:</strong> {fromInfo.singular} ({fromInfo.abbr}) or {fromInfo.plural}
        <br />
        <strong>System:</strong> {fromInfo.system}
      </div>
      <div className="border-b border-dashed border-textMuted"></div>
      <div>
        <strong>To:</strong> {toInfo.singular} ({toInfo.abbr}) {toInfo.plural}
        <br />
        <strong>System:</strong> {toInfo.system}
      </div>
    </div>
  );
}

// 7. Main UnitConverter component
export default function UnitConverter({ params }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(params?.category || "length");
  const [subUnits, setSubUnits] = useState([]);
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [inputValue, setInputValue] = useState("0");
  const [result, setResult] = useState("");
  const [precision, setPrecision] = useState(2);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    try {
      setSelectedCategory(params?.category || "length");
      const measures = convert().measures();
      setCategories(measures);
    } catch {
      setCategories([]);
    }
  }, [params]);

  useEffect(() => {
    try {
      if (selectedCategory) {
        const units = convert().list(selectedCategory);
        setSubUnits(units);
        setFromUnit(units?.[0]?.abbr || "");
        setToUnit(units?.[1]?.abbr || "");
      }
    } catch {
      setSubUnits([]);
      setFromUnit("");
      setToUnit("");
    }
  }, [categories, selectedCategory]);

  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem("unitConverterHistory");
      if (savedHistory) setHistory(JSON.parse(savedHistory));
    } catch {}
  }, []);

  useEffect(() => {
    handleConvert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, fromUnit, toUnit, precision]);

  function handleConvert() {
    const parsedValue = parseFloat(inputValue);
    if (!isNaN(parsedValue) && fromUnit && toUnit) {
      try {
        const res = convert(parsedValue).from(fromUnit).to(toUnit);
        const rounded = Number(res.toFixed(precision));
        setResult(rounded);
        if (parsedValue !== 0) {
          const newHistory = [
            {
              id: Date.now(),
              from: parsedValue,
              fromUnit,
              to: rounded,
              toUnit,
            },
            ...history.slice(0, 4),
          ];
          setHistory(newHistory);
          localStorage.setItem("unitConverterHistory", JSON.stringify(newHistory));
        }
      } catch {
        setResult("Invalid conversion");
      }
    } else {
      setResult("");
    }
  }

  function clearHistory() {
    setHistory([]);
    localStorage.removeItem("unitConverterHistory");
  }

  function handleSwapUnits() {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  }

  return (
    <section className="bg-bg flex flex-col lg:flex-row p-4 gap-6 transition-colors duration-300">
      <AdsPanel />
      <main className="order-1 lg:order-2 lg:basis-3/5 bg-bg rounded-2xl shadow-lg p-6 border border-primary text-textMain transition-colors duration-300 animate-fade-in">
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />
        <UnitSelector
          subUnits={subUnits}
          fromUnit={fromUnit}
          toUnit={toUnit}
          setFromUnit={setFromUnit}
          setToUnit={setToUnit}
          onSwap={handleSwapUnits}
        />
        <InputPrecision
          inputValue={inputValue}
          setInputValue={setInputValue}
          precision={precision}
          setPrecision={setPrecision}
        />
        <ResultDisplay
          inputValue={inputValue}
          fromUnit={fromUnit}
          result={result}
          toUnit={toUnit}
        />
      </main>
      <section className="order-3 lg:order-3 lg:basis-1/5 flex flex-col h-[600px] lg:h-auto lg:max-h-full">
        <CurrentUnitsInfo fromUnit={fromUnit} toUnit={toUnit} />
        <HistoryPanel
          history={history}
          clearHistory={clearHistory}
          className="flex-grow"
        />
      </section>
    </section>
  );
}
