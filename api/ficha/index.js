export default function handler(req, res) {
  const { cliente, msj, col, estadistica } = req.query;
  const timestamp = Date.now();

  let src = "";
  if (estadistica) {
    src = `https://ap.apinmo.com/app/propietarios/index.php?cliente=${estadistica}&x=${timestamp}`;
  } else {
    let c = cliente || "";
    if (msj) c += "&msg=1";
    if (col) c += "&col=" + col;
    src = `https://ap.apinmo.com/app/escaparatecliente/index.php?cliente=${c}&x=${timestamp}`;
  }

  res.setHeader("Content-Type", "text/html");
  res.send(`<!DOCTYPE html><html><head><style>*{margin:0;padding:0;border:0}html,body,iframe{width:100%;height:100%}</style></head><body><iframe src="${src}" width="100%" height="100%" allowfullscreen sandbox="allow-scripts allow-modals allow-top-navigation allow-top-navigation-by-user-activation allow-same-origin allow-forms allow-popups allow-pointer-lock allow-presentation allow-orientation-lock allow-popups-to-escape-sandbox allow-downloads"></iframe></body></html>`);
}
