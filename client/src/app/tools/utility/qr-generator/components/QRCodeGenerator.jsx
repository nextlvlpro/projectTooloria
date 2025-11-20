"use client"
// File: src/app/tools/utility/qr-generator/components/QRCodeGenerator.jsx
import { useState, useCallback, useRef, useEffect } from 'react';
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';

// QR Code type configurations
const qrTypes = {
  url: {
    label: 'Website URL',
    icon: '🔗',
    placeholder: 'https://example.com',
    validation: (value) => {
      if (!value) return { valid: false, message: 'Please enter a URL' };
      try {
        new URL(value.startsWith('http') ? value : `https://${value}`);
        return { valid: true };
      } catch {
        return { valid: false, message: 'Please enter a valid URL' };
      }
    }
  },
  text: {
    label: 'Plain Text',
    icon: '📝',
    placeholder: 'Enter your text here',
    validation: (value) => ({
      valid: value.length > 0 && value.length <= 2000,
      message: value.length === 0 ? 'Please enter some text' : 
               value.length > 2000 ? 'Text too long (max 2000 characters)' : ''
    })
  },
  wifi: {
    label: 'WiFi Network',
    icon: '📶',
    fields: ['ssid', 'password', 'security'],
    validation: (values) => ({
      valid: values.ssid && values.ssid.length > 0,
      message: !values.ssid ? 'Network name (SSID) is required' : ''
    })
  },
  phone: {
    label: 'Phone Number',
    icon: '📞',
    placeholder: '+1234567890',
    validation: (value) => {
      if (!value) return { valid: false, message: 'Please enter a phone number' };
      const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
      return {
        valid: phoneRegex.test(value) && value.replace(/\D/g, '').length >= 10,
        message: 'Please enter a valid phone number (min 10 digits)'
      };
    }
  },
  email: {
    label: 'Email Address',
    icon: '📧',
    placeholder: 'contact@example.com',
    validation: (value) => {
      if (!value) return { valid: false, message: 'Please enter an email address' };
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return {
        valid: emailRegex.test(value),
        message: 'Please enter a valid email address'
      };
    }
  },
  sms: {
    label: 'SMS Message',
    icon: '💬',
    fields: ['phone', 'message'],
    validation: (values) => ({
      valid: values.phone && values.phone.replace(/\D/g, '').length >= 10,
      message: !values.phone ? 'Phone number is required' : 
               values.phone.replace(/\D/g, '').length < 10 ? 'Please enter a valid phone number' : ''
    })
  },
  vcard: {
    label: 'Contact Card',
    icon: '👤',
    fields: ['name', 'phone', 'email', 'organization'],
    validation: (values) => ({
      valid: values.name && values.name.length > 0,
      message: !values.name ? 'Name is required for contact card' : ''
    })
  }
};

const QRCodeGenerator = () => {
  const [selectedType, setSelectedType] = useState('url');
  const [inputValue, setInputValue] = useState('');
  const [wifiData, setWifiData] = useState({
    ssid: '',
    password: '',
    security: 'WPA'
  });
  const [smsData, setSmsData] = useState({
    phone: '',
    message: ''
  });
  const [vcardData, setVcardData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: ''
  });
  const [customization, setCustomization] = useState({
    size: 200,
    bgColor: '#FFFFFF',
    fgColor: '#000000',
    level: 'M',
    marginSize: 4
  });
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [qrValue, setQrValue] = useState('');

  const qrRef = useRef(null);

  // Generate QR code data based on type
  const getQRData = useCallback(() => {
    switch (selectedType) {
      case 'url':
        return inputValue.startsWith('http') ? inputValue : `https://${inputValue}`;
      case 'text':
        return inputValue;
      case 'wifi':
        return `WIFI:T:${wifiData.security};S:${wifiData.ssid};P:${wifiData.password};;`;
      case 'phone':
        return `tel:${inputValue}`;
      case 'email':
        return `mailto:${inputValue}`;
      case 'sms':
        return `sms:${smsData.phone}${smsData.message ? `?body=${encodeURIComponent(smsData.message)}` : ''}`;
      case 'vcard':
        return [
          'BEGIN:VCARD',
          'VERSION:3.0',
          `FN:${vcardData.name}`,
          vcardData.organization ? `ORG:${vcardData.organization}` : '',
          vcardData.phone ? `TEL:${vcardData.phone}` : '',
          vcardData.email ? `EMAIL:${vcardData.email}` : '',
          'END:VCARD'
        ].filter(line => line).join('\n');
      default:
        return inputValue;
    }
  }, [selectedType, inputValue, wifiData, smsData, vcardData]);

  // Validate input based on type
  const validateInput = useCallback(() => {
    const config = qrTypes[selectedType];
    let validation;

    if (config.fields) {
      let values;
      switch (selectedType) {
        case 'wifi':
          values = wifiData;
          break;
        case 'sms':
          values = smsData;
          break;
        case 'vcard':
          values = vcardData;
          break;
        default:
          values = {};
      }
      validation = config.validation(values);
    } else {
      validation = config.validation(inputValue);
    }

    setIsValid(validation.valid);
    setErrorMessage(validation.message || '');
    
    if (validation.valid) {
      setQrValue(getQRData());
    } else {
      setQrValue('');
    }
    
    return validation.valid;
  }, [selectedType, inputValue, wifiData, smsData, vcardData, getQRData]);

  // Download QR code as PNG
  const downloadPNG = useCallback(() => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = `qr-code-${selectedType}-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [selectedType]);

  // Download QR code as SVG
  const downloadSVG = useCallback(() => {
    const svg = qrRef.current?.querySelector('svg');
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `qr-code-${selectedType}-${Date.now()}.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  }, [selectedType]);

  // Handle type change
  const handleTypeChange = useCallback((type) => {
    setSelectedType(type);
    setInputValue('');
    setWifiData({ ssid: '', password: '', security: 'WPA' });
    setSmsData({ phone: '', message: '' });
    setVcardData({ name: '', phone: '', email: '', organization: '' });
    setQrValue('');
    setIsValid(false);
    setErrorMessage('');
  }, []);

  // Auto-validate when input changes
  useEffect(() => {
    validateInput();
  }, [validateInput]);

  const currentType = qrTypes[selectedType];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* QR Code Type Selection */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Choose QR Code Type
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(qrTypes).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => handleTypeChange(key)}
                  className={`
                    p-3 rounded-lg border text-center transition-all hover:shadow-sm
                    ${selectedType === key
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }
                  `}
                >
                  <div className="text-2xl mb-1">{config.icon}</div>
                  <div className="text-sm font-medium">{config.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Input Fields */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Enter Content
            </h3>
            
            {selectedType === 'wifi' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Network Name (SSID) *
                  </label>
                  <input
                    type="text"
                    value={wifiData.ssid}
                    onChange={(e) => setWifiData(prev => ({ ...prev, ssid: e.target.value }))}
                    placeholder="MyWiFiNetwork"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={wifiData.password}
                    onChange={(e) => setWifiData(prev => ({ ...prev, password: e.target.value }))}
                    placeholder="WiFi password"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Security Type
                  </label>
                  <select
                    value={wifiData.security}
                    onChange={(e) => setWifiData(prev => ({ ...prev, security: e.target.value }))}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">Open Network</option>
                  </select>
                </div>
              </div>
            ) : selectedType === 'sms' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={smsData.phone}
                    onChange={(e) => setSmsData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+1234567890"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={smsData.message}
                    onChange={(e) => setSmsData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Your message here"
                    rows={3}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  />
                </div>
              </div>
            ) : selectedType === 'vcard' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={vcardData.name}
                    onChange={(e) => setVcardData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={vcardData.phone}
                    onChange={(e) => setVcardData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+1234567890"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={vcardData.email}
                    onChange={(e) => setVcardData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="john@example.com"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={vcardData.organization}
                    onChange={(e) => setVcardData(prev => ({ ...prev, organization: e.target.value }))}
                    placeholder="Company Name"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {currentType.label} *
                </label>
                {selectedType === 'text' ? (
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={currentType.placeholder}
                    rows={4}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  />
                ) : (
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={currentType.placeholder}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                )}
              </div>
            )}

            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">
                {errorMessage}
              </p>
            )}
          </div>

          {/* Customization */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Customize Appearance
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Size (px)
                </label>
                <select
                  value={customization.size}
                  onChange={(e) => setCustomization(prev => ({ ...prev, size: parseInt(e.target.value) }))}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value={128}>Small (128px)</option>
                  <option value={200}>Medium (200px)</option>
                  <option value={256}>Large (256px)</option>
                  <option value={400}>Extra Large (400px)</option>
                  <option value={512}>XXL (512px)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Error Correction
                </label>
                <select
                  value={customization.level}
                  onChange={(e) => setCustomization(prev => ({ ...prev, level: e.target.value }))}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="L">Low (7%)</option>
                  <option value="M">Medium (15%)</option>
                  <option value="Q">Quartile (25%)</option>
                  <option value="H">High (30%)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Foreground Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={customization.fgColor}
                    onChange={(e) => setCustomization(prev => ({ ...prev, fgColor: e.target.value }))}
                    className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={customization.fgColor}
                    onChange={(e) => setCustomization(prev => ({ ...prev, fgColor: e.target.value }))}
                    className="flex-1 p-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Background Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={customization.bgColor}
                    onChange={(e) => setCustomization(prev => ({ ...prev, bgColor: e.target.value }))}
                    className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={customization.bgColor}
                    onChange={(e) => setCustomization(prev => ({ ...prev, bgColor: e.target.value }))}
                    className="flex-1 p-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview and Download Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Preview & Download
            </h3>
            
            {/* QR Code Preview */}
            <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
              {isValid && qrValue ? (
                <div className="space-y-4">
                  <div className="inline-block p-4 bg-white rounded-lg shadow-sm" ref={qrRef}>
                    {/* Show both SVG and Canvas for download options */}
                    <div className="block">
                      <QRCodeSVG
                        value={qrValue}
                        size={Math.min(customization.size, 300)}
                        bgColor={customization.bgColor}
                        fgColor={customization.fgColor}
                        level={customization.level}
                        marginSize={customization.marginSize}
                      />
                    </div>
                    {/* Hidden canvas for PNG download */}
                    <div className="hidden">
                      <QRCodeCanvas
                        value={qrValue}
                        size={customization.size}
                        bgColor={customization.bgColor}
                        fgColor={customization.fgColor}
                        level={customization.level}
                        marginSize={customization.marginSize}
                      />
                    </div>
                  </div>
                  
                  {/* QR Code Info */}
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <div className="font-medium">{currentType.label}</div>
                    <div className="truncate max-w-xs mx-auto">
                      {selectedType === 'wifi' 
                        ? `WiFi: ${wifiData.ssid}` 
                        : selectedType === 'sms'
                        ? `SMS to ${smsData.phone}`
                        : selectedType === 'vcard'
                        ? `Contact: ${vcardData.name}`
                        : qrValue.length > 50 ? `${qrValue.substring(0, 50)}...` : qrValue
                      }
                    </div>
                  </div>

                  {/* Download Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={downloadPNG}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
                    >
                      <span>📥</span>
                      Download PNG
                    </button>
                    <button
                      onClick={downloadSVG}
                      className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium flex items-center justify-center gap-2"
                    >
                      <span>📄</span>
                      Download SVG
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-12">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center text-2xl">
                    📱
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {!isValid && inputValue ? errorMessage : 'Enter valid information to generate QR code'}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          {isValid && qrValue && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                <button
                  onClick={() => handleTypeChange(selectedType)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
                >
                  🗑️ Clear All
                </button>
              </div>
            </div>
          )}

          {/* Tips */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 Tips</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
              <li>• Higher error correction allows for better scanning with damage</li>
              <li>• Use high contrast colors for better readability</li>
              <li>• Test your QR code before printing or sharing</li>
              <li>• SVG format is better for large prints and logos</li>
              <li>• Keep URLs short for simpler QR codes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Center Examples */}
      <div className="mt-16">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Popular Examples for Service Centers
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">📶</div>
              <h4 className="font-semibold">Customer WiFi</h4>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div><strong>Network:</strong> ServiceCenter_WiFi</div>
              <div><strong>Password:</strong> welcome2024</div>
              <div><strong>Security:</strong> WPA2</div>
              <div className="text-xs text-gray-500">Customers can scan and connect instantly</div>
            </div>
            <button
              onClick={() => {
                setSelectedType('wifi');
                setWifiData({
                  ssid: 'ServiceCenter_WiFi',
                  password: 'welcome2024',
                  security: 'WPA'
                });
              }}
              className="w-full mt-4 px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Use This Example
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🔗</div>
              <h4 className="font-semibold">Government Portal</h4>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div><strong>URL:</strong> https://serviceonline.gov.in</div>
              <div><strong>Purpose:</strong> Direct access to forms</div>
              <div><strong>Use case:</strong> Quick form access</div>
              <div className="text-xs text-gray-500">Perfect for service centers</div>
            </div>
            <button
              onClick={() => {
                setSelectedType('url');
                setInputValue('https://serviceonline.gov.in');
              }}
              className="w-full mt-4 px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Use This Example
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">👤</div>
              <h4 className="font-semibold">Contact Info</h4>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div><strong>Name:</strong> Lok Mitra Kendra</div>
              <div><strong>Phone:</strong> +91-9876543210</div>
              <div><strong>Email:</strong> info@lokmitra.gov.in</div>
              <div className="text-xs text-gray-500">Easy contact sharing</div>
            </div>
            <button
              onClick={() => {
                setSelectedType('vcard');
                setVcardData({
                  name: 'Lok Mitra Kendra',
                  phone: '+91-9876543210',
                  email: 'info@lokmitra.gov.in',
                  organization: 'Government Service Center'
                });
              }}
              className="w-full mt-4 px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Use This Example
            </button>
          </div>
        </div>
      </div>

      {/* Additional Quick Examples */}
      <div className="mt-12">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 text-center">
          More Quick Examples
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">💬</div>
            <h4 className="text-sm font-semibold mb-1">SMS Support</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">Quick SMS to helpline</p>
            <button
              onClick={() => {
                setSelectedType('sms');
                setSmsData({
                  phone: '+91-1800-XXX-XXXX',
                  message: 'I need help with government services'
                });
              }}
              className="mt-2 px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Try Example
            </button>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">📧</div>
            <h4 className="text-sm font-semibold mb-1">Email Support</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">Direct email contact</p>
            <button
              onClick={() => {
                setSelectedType('email');
                setInputValue('support@servicecenter.gov.in');
              }}
              className="mt-2 px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Try Example
            </button>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">📞</div>
            <h4 className="text-sm font-semibold mb-1">Helpline</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">One-tap calling</p>
            <button
              onClick={() => {
                setSelectedType('phone');
                setInputValue('+91-1800-180-1551');
              }}
              className="mt-2 px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Try Example
            </button>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">📝</div>
            <h4 className="text-sm font-semibold mb-1">Instructions</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">Process steps</p>
            <button
              onClick={() => {
                setSelectedType('text');
                setInputValue('Step 1: Bring original documents\nStep 2: Fill application form\nStep 3: Pay fees\nStep 4: Submit and get receipt');
              }}
              className="mt-2 px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Try Example
            </button>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          QR Code Best Practices
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">✅ Do's</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Use high contrast colors (black on white works best)</li>
              <li>• Test QR codes on different devices before printing</li>
              <li>• Keep URLs short and simple</li>
              <li>• Use medium or high error correction for printed codes</li>
              <li>• Place QR codes at eye level for easy scanning</li>
              <li>• Include instructions like "Scan with phone camera"</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">❌ Don'ts</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Don't use colors with low contrast</li>
              <li>• Don't make QR codes too small (minimum 2cm x 2cm)</li>
              <li>• Don't place on curved or reflective surfaces</li>
              <li>• Don't cover important parts of the QR code</li>
              <li>• Don't use expired or broken links</li>
              <li>• Don't forget to test before mass printing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;