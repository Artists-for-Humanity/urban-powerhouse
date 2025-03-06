import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hello World</h1>

        <iframe className="w-[1000px] h-[1000px]"
          srcDoc="
<!DOCTYPE html>
<html>
<head>
    <script src='https://widgets.mindbodyonline.com/javascripts/healcode.js'></script>
</head>
<body>
    <healcode-widget data-version='0.2' 
                     data-link-class='loginRegister' 
                     data-site-id='105872' 
                     data-mb-site-id='5724678'  
                     data-bw-identity-site='false' 
                     data-type='account-link' 
                     data-inner-html='Login'>
    </healcode-widget>
</body>
</html>
"
        ></iframe>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
