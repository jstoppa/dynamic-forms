import { GridPosition } from "./template";

export class QuestionBase<T> {
  id: string;
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  position: GridPosition;

  constructor(
    options: {
      id?: string;
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      position?: GridPosition;
    } = {}
  ) {
    this.id = options.id;
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || "";
    if (options.position && options.position.id && options.position.index)
      this.position = <GridPosition>{
        id: options.position.id,
        index: options.position.index
      };
  }
}
