export const $ = <T extends Element>(
  selector: string,
  type?: new () => T
): T => {
  const elt = document.querySelector<Element>(selector);
  if (elt === null) {
    throw new Error(`Cannot find the selector ${selector}`);
  }
  if (type !== undefined) {
    if (!(elt instanceof type)) {
      throw new Error(`Selector found but the type is not ${type.name}`);
    }
  }
  return elt as T;
};

export const setAttribute = (
  elt: Element,
  key: string,
  value: number
): void => {
  elt.setAttributeNS(null, key, value + "");
};

export const getKeys = <T extends object>(o: T) => {
  return Object.keys(o) as (keyof T)[];
};
