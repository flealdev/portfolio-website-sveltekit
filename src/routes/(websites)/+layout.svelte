<script>
  let { children } = $props();
</script>

<svelte:head>
  <!-- Google tag (gtag.js) -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-MX4QTNWJ6D"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-MX4QTNWJ6D");
  </script>
  <!-- Event snippet for [R$100, 1 SEM] Clique Whatsapp conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
  <script>
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof url != "undefined") {
          window.location = url;
        }
      };
      gtag("event", "conversion", {
        send_to: "AW-461896172/uSojCPmY0_4YEOzzn9wB",
        event_callback: callback,
      });

      return false;
    }
  </script>
  <!-- Meta Pixel Code -->
  <script>
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", "812175333232642");
    fbq("track", "PageView");
  </script>
  <noscript
    ><img
      height="1"
      width="1"
      style="display:none"
      src="https://www.facebook.com/tr?id=812175333232642&ev=PageView&noscript=1"
    /></noscript
  >
  <!-- End Meta Pixel Code -->
</svelte:head>

{@render children?.()}
