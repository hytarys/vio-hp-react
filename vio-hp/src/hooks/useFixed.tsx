export const useFixed = (fixed:boolean) => 
{
  interface styles {
    height: string;
    left: string;
    overflow: string;
    position: string;
    top: string;
    width: string;
  }
  // スクロールバーの幅を取得してその分余白追加
  const scrollbarWidth = window.innerWidth - document.body.clientWidth;
  document.body.style.paddingRight = fixed ? `${scrollbarWidth}px` : "";

  // スクロール位置を取得する要素を取得
  const scrollingElement = () => {
    const browser = window.navigator.userAgent.toLowerCase();
    if("scrollingElement" in document) return document.scrollingElement;
    if(browser.indexOf("webkit") > 0) return document.body;
    return document.documentElement;
  }
  
  // スクロール量を取得
  const scrollY = fixed
  ? scrollingElement().scrollTop
  :parseInt(document.body.style.top || "0");

  // css設定
  const styles:styles = {
    height: '100vh',
    left: '0',
    overflow: 'hidden',
    position: 'fixed',
    top: `${scrollY * -1}px`,
    width: '100vw',
  };

  Object.keys(styles).forEach((key:keyof styles)=>{
    switch (key) {
      case "height":
        document.body.style.height= fixed ? styles[key] : '';
      break;
      case "left":
        document.body.style.left= fixed ? styles[key] : '';
      break;
      case "overflow":
        document.body.style.overflow= fixed ? styles[key] : '';
      break;
      case "position":
        document.body.style.position= fixed ? styles[key] : '';
      break;
      case "top":
        document.body.style.top= fixed ? styles[key]: '';
      break;
      case "width":
        document.body.style.width = fixed ? styles[key]: '';
      break;
    }
  })

  // 背景固定解除時に元の位置にスクロールする
  return scrollY;
}