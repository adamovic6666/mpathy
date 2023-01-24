const MouseSCcroll = ({ removeScroller }) => {
  return (
    <div className={` mouse_scroll ${removeScroller ? "remove-scroll" : ""} `}>
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div>
        <span className="m_scroll_arrows unu"></span>
        <span className="m_scroll_arrows doi"></span>
        <span className="m_scroll_arrows trei"></span>
      </div>
    </div>
  );
};

export default MouseSCcroll;
