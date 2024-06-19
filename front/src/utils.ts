export const $ = (selector: string): Element => {
  const elt = document.querySelector<Element>(selector);
  if (elt === null) {
    throw new Error(`Cannot find the selector ${selector}`);
  }
  return elt;
};

export const setAttribute = (
  elt: Element,
  key: string,
  value: number
): void => {
  elt.setAttributeNS(null, key, value + "");
};
