export default function createInt8TypedArray(length, position, value){
  if (position >= length){
    throw new Error('Position outside range');
  }
  const bufer = new ArrayBuffer(length);
  const views = new DataView(bufer);
  views.setInt8(position, value);
  return views;
}
