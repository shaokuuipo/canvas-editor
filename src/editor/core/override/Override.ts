export class Override {
  public paste: ((evt?: ClipboardEvent) => void) | undefined
  public copy: (() => void) | undefined
  public drop: ((evt: DragEvent) => void) | undefined
}
