# 練習範例

* useEffect使用不當,當心成為效能殺手

```js script

import React, { useState, useEffect } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

 
function WordCount({children=""})
{
  useAnyKeyToRender();

  const words = children.split(" ");
  //造成主控台狂輸出....先喝杯水壓壓驚...
  //可以使用 記憶化技術(Memoization)
  useEffect(() => {
    console.log("fresh render2");
  }, [words]);

  return (
<>
<p>{children}</p>
<p><strong>{children.length}</strong></p>
</>

  )
}

export default function App2() {
  

  return (
    <WordCount>a b c d e f g</WordCount>
  );
}


```
## 改用useMemo改善效能議題
* useMemo 第一個參數是function第一次被載入時執行
* 第二個引數如同useEffect
* useCallback(fn,kdeps)  等同於 useMemo(()=>fn,deps)
```js script
import React, { useState, useEffect, useMemo } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

function WordCount({ children = "" }) {
  useAnyKeyToRender();

  const words = useMemo(() => children.split(" "), []);
  //造成主控台狂輸出....先喝杯水壓壓驚...
  useEffect(() => {
    console.log("fresh render2");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{children.length}</strong>
      </p>
    </>
  );
}

export default function App2() {
  return <WordCount>a b c d e f g</WordCount>;
}

```

