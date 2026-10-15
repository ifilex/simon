import React from 'react';
import { DeviceInfo, TranslationContent } from '../types';
import { Monitor, Tablet, Smartphone, Touchpad } from 'lucide-react';

interface DeviceBadgeProps {
  device: DeviceInfo;
  t: TranslationContent;
}

export const DeviceBadge: React.FC<DeviceBadgeProps> = ({ device, t }) => {
  const getIcon = () => {
    switch (device.type) {
      case 'tablet':
        return <Tablet className="w-4 h-4 text-purple-400" />;
      case 'mobile':
        return <Smartphone className="w-4 h-4 text-emerald-400" />;
      case 'desktop':
      default:
        return <Monitor className="w-4 h-4 text-blue-400" />;
    }
  };

  const getDeviceLabel = () => {
    return t.deviceTypes[device.type] || device.type;
  };

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/80 border border-slate-700/80 rounded-full text-xs text-slate-300 backdrop-blur-md shadow-sm">
      <div className="flex items-center gap-1.5 font-medium">
        {getIcon()}
        <span>{getDeviceLabel()}</span>
        <span className="text-slate-500">•</span>
        <span className="text-slate-400">{device.os}</span>
      </div>
      <div className="h-3 w-[1px] bg-slate-700" />
      <div className="flex items-center gap-1 text-[11px] text-slate-400">
        <Touchpad className={`w-3.5 h-3.5 ${device.isTouch ? 'text-emerald-400' : 'text-slate-500'}`} />
        <span className={device.isTouch ? 'text-emerald-300 font-medium' : 'text-slate-400'}>
          {device.isTouch ? t.touchSupported : t.noTouchSupported}
        </span>
      </div>
    </div>
  );
};
