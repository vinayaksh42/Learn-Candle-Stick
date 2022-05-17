import React from "react";
import "./LearnModule.css";
export const LearnModule = () => {
  return (
    <>
      <div className="Heading_div">
        <h1 className="Heading_tag">Hammer Candle Stick</h1>
      </div>
      <div className="image_div">
        <img className="image_tag" alt="" src="hammer.png" />
      </div>
      <div className="Text_div">
        <p>
          Hammer is a single candlestick pattern that is formed at the end of a
          downtrend and signals a bullish reversal. The real body of this candle
          is small and is located at the top with a lower shadow which should be
          more than twice the real body. This candlestick chart pattern has no
          or little upper shadow. The psychology behind this candle formation is
          that the prices opened, and sellers pushed down the prices. Suddenly
          the buyers came into the market and pushed the prices up and closed
          the trading session more than the opening price. This resulted in the
          formation of bullish pattern and signifies that buyers are back in the
          market and downtrend may end. Traders can enter a long position if
          next day a bullish candle is formed and can place a stop-loss at the
          low of Hammer.
        </p>
      </div>
      <div className="image_stock_div">
          <img className="image_stock" alt="" src="hammerstock.png" />
      </div>
    </>
  );
};

export default LearnModule;
