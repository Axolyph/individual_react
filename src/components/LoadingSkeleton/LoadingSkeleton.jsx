import './LoadingSkeleton.css';

const LoadingSkeleton = () => {
    return (
        <div className="skeleton-grid">
            {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="skeleton-card">
                    <div className="skeleton-thumb pulse"></div>
                    <div className="skeleton-title pulse"></div>
                    <div className="skeleton-text pulse"></div>
                    <div className="skeleton-footer">
                        <div className="skeleton-price pulse"></div>
                        <div className="skeleton-btn pulse"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LoadingSkeleton;
