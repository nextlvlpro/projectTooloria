import Loading from "@/app/loading";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const UnitConverter = dynamic(
  () => import("@/components/tools/unit-converter/UnitConverter"),
  { suspense: true }
);
const categoryMetadata = {
  length: {
    description: "Convert length units like meters, kilometers, miles, feet, inches, and more with Tooloria’s length converter.",
    keywords: [
      "meters to feet",
      "kilometers to miles",
      "inches to cm",
      "metric to imperial length",
      "distance converter online",
      "unit conversion tool",
      "centimeters to inches",
      "yard to meter conversion",
      "length measurement converter",
      "international length units"
    ],
  },
  area: {
    description: "Easily convert area measurements such as square meters, hectares, acres, and square feet with Tooloria.",
    keywords: [
      "sq ft to acres",
      "hectares to square miles",
      "land area calculator",
      "property measurement converter",
      "square meters to square feet",
      "acre to hectare conversion",
      "construction area converter",
      "metric area units",
      "floor space calculator",
      "land unit conversion"
    ],
  },
  mass: {
    description: "Convert mass and weight units like kilograms, grams, pounds, ounces, and tons quickly and accurately.",
    keywords: [
      "kg to lbs converter",
      "pounds to grams",
      "ounces to grams",
      "metric weight conversion",
      "body weight converter",
      "shipping weight calculator",
      "precious metals converter",
      "stone to kilogram",
      "kitchen measurements weight",
      "scientific mass conversion"
    ],
  },
  volume: {
    description: "Convert volume units including liters, milliliters, gallons, quarts, pints, and cups with ease.",
    keywords: [
      "liters to gallons",
      "ml to cups",
      "cooking measurements converter",
      "liquid volume conversion",
      "fuel capacity calculator",
      "beverage volume converter",
      "chemistry volume units",
      "imperial to metric volume",
      "water volume calculator",
      "barrel to liter conversion"
    ],
  },
  each: {
    description: "Count individual items or units with Tooloria’s each unit converter for precise quantity calculations.",
    keywords: [
      "unit counter tool",
      "inventory counting converter",
      "batch quantity calculator",
      "retail unit conversion",
      "manufacturing piece count",
      "per item calculator",
      "wholesale quantity converter",
      "packaging unit tool",
      "e-commerce unit counter",
      "quantity measurement tool"
    ],
  },
  temperature: {
    description: "Convert temperatures between Celsius, Fahrenheit, Kelvin, and more using Tooloria’s temperature converter.",
    keywords: [
      "Celsius to Fahrenheit",
      "Kelvin converter",
      "body temperature conversion",
      "oven temp converter",
      "weather temperature tool",
      "scientific temperature scale",
      "international temp units",
      "quick temperature calculator",
      "digital thermometer conversion",
      "cooking temperature converter"
    ],
  },
  time: {
    description: "Convert time units such as seconds, minutes, hours, days, weeks, months, and years accurately.",
    keywords: [
      "hours to minutes converter",
      "work hours calculator",
      "age calculator tool",
      "project timeline converter",
      "time zone conversion",
      "meeting duration calculator",
      "epoch time converter",
      "business days calculator",
      "scientific time units",
      "calendar date converter"
    ],
  },
  digital: {
    description: "Convert digital storage units like bytes, kilobytes, megabytes, gigabytes, and terabytes easily.",
    keywords: [
      "MB to GB converter",
      "file size calculator",
      "data storage converter",
      "terabytes to petabytes",
      "cloud storage calculator",
      "device memory converter",
      "digital capacity tool",
      "photo storage converter",
      "video file size calculator",
      "bits and bytes conversion"
    ],
  },
  partsPer: {
    description: "Convert parts-per measurements like ppm, ppb, ppt for precision scientific calculations.",
    keywords: [
      "ppm calculator",
      "concentration conversion",
      "scientific notation converter",
      "chemical dilution tool",
      "environmental ppm calculator",
      "parts per trillion converter",
      "water quality measurement",
      "air pollution units",
      "molarity conversion tool",
      "density measurement converter"
    ],
  },
  speed: {
    description: "Convert speed units including meters per second, kilometers per hour, miles per hour, and knots.",
    keywords: [
      "kph to mph converter",
      "speed unit calculator",
      "nautical speed conversion",
      "vehicle speed converter",
      "athletics speed tool",
      "wind speed conversion",
      "mach number calculator",
      "marathon pace speed",
      "aviation speed units",
      "online speed converter"
    ],
  },
  pace: {
    description: "Convert pace units for running and cycling such as minutes per kilometer and minutes per mile.",
    keywords: [
      "running pace calculator",
      "marathon pace converter",
      "cycling speed tool",
      "min/mile to min/km",
      "treadmill pace conversion",
      "triathlon pace calculator",
      "jogging speed converter",
      "fitness pace tracker",
      "race pace predictor",
      "endurance training converter"
    ],
  },
  pressure: {
    description: "Convert pressure units like pascals, bars, psi, atmospheres, and torrs with ease.",
    keywords: [
      "psi to bar converter",
      "tire pressure calculator",
      "hydraulic pressure tool",
      "weather pressure conversion",
      "scuba diving calculator",
      "industrial pressure units",
      "blood pressure converter",
      "vacuum pressure tool",
      "engineering pressure units",
      "compressed air converter"
    ],
  },
  current: {
    description: "Convert electrical current units including amperes, milliamperes, and kiloamperes accurately.",
    keywords: [
      "mA to amps converter",
      "electrical current tool",
      "circuit current calculator",
      "battery current conversion",
      "industrial current units",
      "microamps converter",
      "power supply calculator",
      "electronics current tool",
      "three-phase current converter",
      "scientific current units"
    ],
  },
  voltage: {
    description: "Convert voltage units such as volts, millivolts, and kilovolts with Tooloria’s voltage converter.",
    keywords: [
      "mV to volts converter",
      "battery voltage tool",
      "household voltage converter",
      "industrial voltage units",
      "electronics voltage calculator",
      "power grid conversion",
      "safety voltage tool",
      "transformer calculator",
      "international voltage converter",
      "electrical potential tool"
    ],
  },
  power: {
    description: "Convert power units including watts, kilowatts, horsepower, and megawatts for electrical and mechanical systems.",
    keywords: [
      "kW to horsepower",
      "solar power calculator",
      "engine power converter",
      "appliance wattage tool",
      "industrial power units",
      "energy efficiency calculator",
      "generator power conversion",
      "mechanical power tool",
      "electrical load calculator",
      "renewable energy converter"
    ],
  },
  reactivePower: {
    description: "Convert reactive power units like VAR (volt-ampere reactive) and kilovolt-amperes reactive (kVAR).",
    keywords: [
      "kVAR calculator",
      "power factor tool",
      "electrical grid converter",
      "industrial power correction",
      "energy efficiency calculator",
      "AC circuit converter",
      "transformer reactive power",
      "capacitor bank calculator",
      "electrical engineering tool",
      "three-phase power converter"
    ],
  },
  apparentPower: {
    description: "Convert apparent power units such as VA (volt-amperes) and kVA (kilovolt-amperes).",
    keywords: [
      "kVA calculator",
      "generator sizing tool",
      "UPS power converter",
      "electrical load calculator",
      "industrial capacity tool",
      "transformer rating converter",
      "circuit breaker calculator",
      "power supply sizing",
      "energy consumption tool",
      "electrical system converter"
    ],
  },
  energy: {
    description: "Convert energy units like joules, kilojoules, calories, kilowatt-hours, and BTUs efficiently.",
    keywords: [
      "kWh to joules",
      "calorie counter tool",
      "electricity cost calculator",
      "food energy converter",
      "BTU to watts",
      "renewable energy units",
      "physics energy calculator",
      "heating energy converter",
      "battery capacity tool",
      "scientific energy units"
    ],
  },
  reactiveEnergy: {
    description: "Convert reactive energy units for advanced electrical calculations in VARh (volt-ampere reactive hours).",
    keywords: [
      "VARh calculator",
      "energy metering tool",
      "smart grid converter",
      "industrial energy correction",
      "power quality analysis",
      "electrical billing calculator",
      "capacitive energy tool",
      "utility meter conversion",
      "energy audit tool",
      "reactive power calculator"
    ],
  },
  volumeFlowRate: {
    description: "Convert volume flow rate units such as liters per second, cubic meters per hour, and gallons per minute.",
    keywords: [
      "GPM to l/s",
      "water flow calculator",
      "HVAC system converter",
      "pump capacity tool",
      "hydraulic flow rate",
      "irrigation calculator",
      "fluid dynamics converter",
      "pipe flow calculator",
      "industrial flow units",
      "aquarium flow converter"
    ],
  },
  illuminance: {
    description: "Convert illuminance units like lux and foot-candles for lighting and photography.",
    keywords: [
      "lux to foot-candles",
      "lighting design tool",
      "photography exposure calculator",
      "LED brightness converter",
      "solar illuminance tool",
      "workplace lighting units",
      "camera light meter",
      "architectural lighting converter",
      "greenhouse lighting tool",
      "stage lighting calculator"
    ],
  },
  frequency: {
    description: "Convert frequency units such as hertz, kilohertz, megahertz, and gigahertz easily.",
    keywords: [
      "MHz to GHz",
      "radio frequency converter",
      "processor speed tool",
      "audio frequency calculator",
      "electrical Hz converter",
      "wireless spectrum tool",
      "music note frequency",
      "engineering frequency units",
      "scientific wave converter",
      "vibration analysis tool"
    ],
  },
  angle: {
    description: "Convert angle units including degrees, radians, and gradians for geometry and physics.",
    keywords: [
      "radians to degrees",
      "slope angle calculator",
      "geometry converter tool",
      "navigation bearing tool",
      "engineering angle units",
      "trigonometry calculator",
      "circle measurement converter",
      "construction angle tool",
      "astronomy angle converter",
      "robotics joint angles"
    ],
  },
};


export async function generateStaticParams() {
  const categories = [
    'length', 'area', 'mass', 'volume', 'each', 'temperature', 'time',
    'digital', 'partsPer', 'speed', 'pace', 'pressure', 'current',
    'voltage', 'power', 'reactivePower', 'apparentPower', 'energy',
    'reactiveEnergy', 'volumeFlowRate', 'illuminance', 'frequency', 'angle'
  ];
  
  return categories.map(category => ({ category }));
}

export async function generateMetadata({ params }) {
  const category = (await params).category || "unit converter";

  const title = `${category.charAt(0).toUpperCase() + category.slice(1)} Unit Converter – Tooloria`;
  const description = `${category} category using Tooloria's unit converter.`;

  const keywords = [
    "unit converter",
    `${category} conversion`,
    "Tooloria",
    "unit converter tool online",
  ];

  return {
    title,
    description,
    keywords,
  };
}

export default async function Page({ params }) {
  const category = (await params).category || "unit converter";

  return (
    <main className="mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">
        {category.charAt(0).toUpperCase() + category.slice(1)} Unit Converter
      </h1>
      <p className="mb-4 text-textMuted">
        Use this simple tool to convert {category}
      </p>

      <Suspense fallback={<Loading />}>
        <UnitConverter params={params} />
      </Suspense>
    </main>
  );
}
