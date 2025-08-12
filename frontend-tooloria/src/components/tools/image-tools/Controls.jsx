import { Button } from "@/components/ui/Button";

export default function Controls({
  resizePresets,
  compressPresets,
  selectedResizePreset,
  selectedCompressPreset,
  setSelectedResizePreset,
  setSelectedCompressPreset,
  processImage
}) {
  return (
    <div className="flex flex-col gap-4">
      <ResizeControls
        resizePresets={resizePresets}
        selectedResizePreset={selectedResizePreset}
        setSelectedResizePreset={setSelectedResizePreset}
      />
      <CompressControls
        compressPresets={compressPresets}
        selectedCompressPreset={selectedCompressPreset}
        setSelectedCompressPreset={setSelectedCompressPreset}
      />
      <Button
        variant="primary"
        onClick={(e) => processImage(e)}
      >
        Process Image
      </Button>
    </div>
  );
}


function ResizeControls({ resizePresets, selectedResizePreset, setSelectedResizePreset }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Resize to:</label>
      <select
        className="p-2 border rounded bg-white"
        value={JSON.stringify(selectedResizePreset)}
        onChange={(e) => setSelectedResizePreset(JSON.parse(e.target.value))}
      >
        {resizePresets.map((preset) => (
          <option key={preset.label} value={JSON.stringify(preset.dimension)}>
            {preset.label}
          </option>
        ))}
      </select>
    </div>
  );
}


function CompressControls({ compressPresets, selectedCompressPreset, setSelectedCompressPreset }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Compress to (KB):</label>
      <select
        className="p-2 border rounded bg-white"
        value={selectedCompressPreset}
        onChange={(e) => setSelectedCompressPreset(Number(e.target.value))}
      >
        {compressPresets.map((preset) => (
          <option key={preset} value={preset}>
            {preset} KB
          </option>
        ))}
      </select>
    </div>
  );
}
