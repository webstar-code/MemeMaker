
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Create memes, Download it and Share it with your friends, Instantly" />
    <meta name="keywords" content="Create and Download Memes Instantly" />
    <!-- Google Adsense -->
    <script data-ad-client="ca-pub-6240451373743377" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-164587227-1"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "UA-164587227-1");
    </script>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css"
    />
    <!-- <link rel="stylesheet" href="/assests/css/styles.css"> -->
    <link rel="stylesheet" href="/assests/css/styles/main.css" />

    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <title>MemeMaker</title>
  </head>

  <body>
    <section class="root">
      <!-- <div class="Home-menu">
        <img
          src="/assests/images/menu.svg"
          style="width: 20px; height: 20px;"
        />
      </div> -->
      <div class="Home-container">
        <div class="close"><img src="/assests/images/icons/icons8-delete.svg" style="height: 20px;"></div>
        <div class="intro">
          <h1>MemeMaker</h1>
          <p>Instantly makes memes and download it.</p>
        </div>
        <div class="home-footer">developed by webstar</div>
      </div>
      <div class="brand">
        <h2>MemeMaker</h2>
      </div>
      <div class="wrapper">
        <div class="Edit-container">
          <div class="container">
            <div class="black-box Top"></div>
            <img src="" id="container-img" loading="lazy"/>
            <div class="black-box Bottom"></div>
             
          </div>
          <div class="btn-container">
            <button class="addTextbtn" id="addtext">
              <img src="/assests/images/icons/icons8-plus.svg" height="12px" style="padding-left: 5px;">
              Add Text</button>
            <a id="downloadbtn"><button class="downloadbtn">
              <img src="https://img.icons8.com/windows/32/000000/download.png" style="height: 12px"/>
              Save</button></a>
          </div>
        </div>

        <div class="Edit-tools">
            <div class="edit-title">
              <div><img src="/assests/images/icons/icons8-settings (1).svg" style="height: 12px; padding-right: 5px;">Edit tools</div>
            <span class="show-tools">
              <img src="https://img.icons8.com/ios/16/000000/chevron-down.png" style="fill: bisque;"/>
              <!-- <img src="https://img.icons8.com/small/16/000000/chevron-down.png"/> -->
              <!-- <img src="/assests/images/icons/icons8-delete.svg" style="height: 12px; color: bisque; fill: bisque;"> -->
              </span>
              </div> 
            <div class="tools">
            <div class="change-color">
                <span>Color: </span>
                <button class="white color-btn ">White</button>
                <button class="color-btn black">Black</button>
                <button class="color-btn red">Red</button>
            </div>
            <div class="change-font">
                <span>Style: </span>
                <button class="font-btn none-text">NONE</button>
                <button class="font-btn white-text">TEXT1</button>
                <button class="font-btn black-text">TEXT2</button>
            </div>
            <div class="template">
                <span>Templates:</span>
                <div class="templates">
                  <div>
                  <span class="none"><img src="/assests/images/none.svg" style="width: 50px; height: 50px;"></span>
                  <span class="TopBottomBlack"><img src="/assests/images/TopBottom.svg" style="width: 50px; height: 50px;"></span>
                  <span class="TopBottomWhite"><img src="/assests/images/white.svg" style="width: 50px; height: 50px;"></span>
                  <span class="TopWhiteExtra"><img src="/assests/images/TopExtra.svg" style="width: 50px; height: 50px;"></span>
                </div>
                <div>
                  <span class="BottomBlack"><img src="/assests/images/BottomBlack.svg" style="width: 50px; height: 50px;"></span>
                  <span class="BottomWhite"><img src="/assests/images/BottomWhite.svg" style="width: 50px; height: 50px;"></span>
                  <span class="TopBlack"><img src="/assests/images/TopBlack.svg" style="width: 50px; height: 50px;"></span>
                  <span class="TopWhite"><img src="/assests/images/TopWhite.svg" style="width: 50px; height: 50px;"></span>
                </div>
                </div>
            </div>

            <div class="control">
                <button class="control-btn reset">reset <img src="/assests/images/icons/icons8-restart.svg" height="12px" style="padding-left: 5px;"></button>
                <button class="control-btn done">Done</button>
            </div>
          </div>

        </div>
      </div>
      <hr />
      <div class="Image-container">
        <h1>Select a Image</h1>
        <div class="row">
          <div class="column1 column" data-aos="fade-up"></div>
          <div class="column2 column" data-aos="fade-up"></div>
          <div class="column3 column" data-aos="fade-up"></div>
          <div class="column4 column" data-aos="fade-up"></div>
        </div>
      </div>

      <div class="footer">No more images...</div>
    </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="./assests/js/jquery-ui-touch-punch-amd/jquery.ui.touch-punch.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
    <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/jquery.fittext.js"></script>
    <script src="/assests/js/index.js"></script>
    <script src="/assests/js/Edit_Tools.js"></script>
  </body>
</html>
