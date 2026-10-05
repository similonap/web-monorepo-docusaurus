import React, {type CSSProperties} from 'react';

const credentiallessAttribute = {credentialless: ''} as Record<string, string>;

interface ExternalPreviewFrameProps {
  src: string;
  title: string;
  className?: string;
  style?: CSSProperties;
}

export default function ExternalPreviewFrame({
  src,
  title,
  className,
  style,
}: ExternalPreviewFrameProps) {
  return (
    <iframe
      {...credentiallessAttribute}
      className={className}
      style={style}
      src={src}
      title={title}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  );
}
