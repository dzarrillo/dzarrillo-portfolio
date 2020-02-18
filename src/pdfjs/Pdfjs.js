export default class Pdfjs {
  init = (source, element) => {
    // const textNode = document.createElement('p');
    // textNode.innerHTML = `Our PDF source will be: ${source}`;

    // element.appendChild(textNode);
    const iframe = document.createElement("iframe");

    iframe.src = `/pdfjs-1.9.426-dist/web/viewer.html?file=${source}`;
    iframe.width = "100%";
    iframe.height = "100%";

    element.appendChild(iframe);
  };
}
