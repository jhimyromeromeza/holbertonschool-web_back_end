export default function guardrail(mathFunction) {
  const queue = [];
  let temp;
  try {
    temp = mathFunction();
  } catch (error) {
    temp = error.toString();
  }
  queue.push(temp);
  queue.push('Guardrail was processed');
  return queue;
}
