export function generateKeyCache(
  prefix: string,
  ...args: (string | number)[]
): string {
  return `${prefix}:${args.join(':')}`;
}
