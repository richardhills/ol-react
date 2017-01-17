import ol from 'openlayers';

const STYLE_KEY_FACTORIES = {
  geometry: (value) => new ol.style.Geometry(value),
  fill: (value) => new ol.style.Fill(value),
  image: (value) => buildImage(value),
  stroke: (value) => new ol.style.Stroke(value),
  text: (value) => buildText(value),
  zIndex: (value) => value
};

export function buildStyle(style) {
  if (!style) {
    return null;
  }

  if (Array.isArray(style)) {
    return style.map(buildStyle);
  }

  if (typeof style === "function") {
    return style;
  }

  if (ol.style.Style.prototype.isPrototypeOf(style)) {
    return style;
  }

  const result = {};

  evaluateKeys(style, result);

  return new ol.style.Style(result);
}

function evaluateKeys(style, result) {
  Object.keys(STYLE_KEY_FACTORIES)
    .filter((key) => !!style[key])
    .forEach((key) => {
      result[key] = STYLE_KEY_FACTORIES[key](style[key]);
    });

  return result;
}

function buildText(style) {
  if (!style) {
    return null;
  }

  if (typeof style === "function") {
    return style;
  }

  // Prevent an infinite loop..
  let textContent = style.text;
  delete style.text;

  let textStyle = style;

  evaluateKeys(style, textStyle);

  textStyle.text = textContent;

  return new ol.style.Text(textStyle);
}

function buildImage(style) {
  if (!style) {
    return null;
  }

  if (typeof style === "function") {
    return style;
  }

  var imageStyle = style;

  evaluateKeys(style, imageStyle);

  switch (style.type) {
    case 'circle':
      return new ol.style.Circle(imageStyle);
    case 'icon':
      return new ol.style.Icon(imageStyle);
    case 'regular-shape':
      return new ol.style.RegularShape(imageStyle);
  }
}

