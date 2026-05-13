export default function handler(req, res) {
  const codigo = req.query.codigo || "";
  const underscoreIndex = codigo.indexOf("_");
  const numagencia = codigo.substring(0, underscoreIndex);
  const datofe = codigo.substring(underscoreIndex + 1);

  const url = `https://crm.inmovilla.com/new/app/escaparatecliente/panelpropietario/ficha.php?idioma=1&codOfer=${datofe}&numagencia=${numagencia}&datosAgencia=${numagencia}&formato=ficha`;

  res.setHeader("Content-Type", "text/html");
  res.send(`<!DOCTYPE html><html><head><style>*{margin:0;padding:0;border:0}html,body,iframe{width:100%;height:100%}</style></head><body><iframe src="${url}" width="100%" height="100%" allowfullscreen sandbox="allow-scripts allow-modals allow-top-navigation allow-top-navigation-by-user-activation allow-same-origin allow-forms allow-popups allow-pointer-lock allow-presentation allow-orientation-lock allow-popups-to-escape-sandbox allow-downloads"></iframe></body></html>`);
}
