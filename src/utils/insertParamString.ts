interface insertParamsStringProps {
  text: string;
  value: string;
  indexStart: number;
  indexEnd: number;
}

export function insertParamString({
  text,
  value,
  indexStart = 0,
  indexEnd,
}: insertParamsStringProps) {
  if (!text) {
    throw new Error("debe ingresar un string");
  }
  if (value.length <= 0) return text;

  const str = text.slice(indexStart, indexEnd);
  const strFinal = text.slice(text.length - Math.abs(indexEnd));

  return str.concat(value, strFinal);
}
