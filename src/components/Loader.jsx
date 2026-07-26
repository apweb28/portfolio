import { useSiteLoader } from '../hooks/useSiteLoader.js';
import LoaderIllustration from './icons/LoaderIllustration.jsx';

export default function Loader() {
  const { isVisible, isHiding, progress } = useSiteLoader();

  if (!isVisible) return null;

  return (
    <div className={`site-loader${isHiding ? ' hide' : ''}`} aria-hidden="true">
      <div className="loader-illustration">
        <LoaderIllustration />
      </div>
      <p className="loader-text gradient-text">
        <span className="loader-percent">{progress}%</span>
      </p>
    </div>
  );
}
