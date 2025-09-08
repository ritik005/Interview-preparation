import React, {useState} from "react";

function ProgressBar() {
    const [percent, setPercent] = useState(0);

    const handleDecrement = () => {
        if (percent > 0) {
            setPercent(prev => prev - 10);
        }
    }

    const handleIncrement = () => {
        if (percent < 100) {
            setPercent(prev => prev + 10);
        }
    }

    const getColor = () => {
        if (percent < 40) {
            return 'red'
        }
        if (percent < 80) {
            return 'orange';
        }
        return 'green';
    }

    const barStyle = ( color) => ({
        backgroundColor: color,
        width: `${percent}%`,
        height: "100%",
        transition: "width 0.3s ease",
    });


    const buttonGroupStyle = {
        display: 'flex',
        gap: '8px',
        marginTop: '12px'
    };

    const buttonStyle = {
        cursor: 'pointer',
        padding: '4px 12px'
    };

    const progressTextStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontWeight: 'bold',
        pointerEvents: 'none',
    }

    const containerStyle = {
        border: "1px solid grey",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#dddddd",
        position: "relative",
        height: "24px",
        width: "100%",
    };

    return (
        <>
        <div
            style={containerStyle}
            >
            <div style={barStyle( getColor())} id="testBgColor" />
            <div style={progressTextStyle}>{percent}%</div>
            
        </div>
            <div style={buttonGroupStyle}>
                <button style={buttonStyle} onClick={handleDecrement}>-10%</button>
                <button style={buttonStyle} onClick={handleIncrement}>+10%</button>
            </div>
        </>
    );
}

export default ProgressBar;
