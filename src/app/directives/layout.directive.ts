import {
  Directive,
  ElementRef,
  Input,
  ViewContainerRef,
  TemplateRef,
  Renderer2
} from "@angular/core";
import { Template } from "../models/template";

@Directive({
  selector: "[gdConfig][gdConfigOf]"
})
export class LayoutDirective {
  constructor(
    private view: ViewContainerRef,
    private el: ElementRef,
    private renderer: Renderer2,
    private template: TemplateRef<any>
  ) { }

  @Input()
  set gdConfigOf(template: Template) {
    this.view.clear();
    if (template && Object.keys(template).length > 0) {
      this.setParentAttributes(template);

      const list = this.getGridStyleList(template);
      if (list)
        list.forEach((item, index) => {
          this.view.createEmbeddedView(this.template, {
            $implicit: item,
            index
          });
        });
    }
  }

  /**
   * Get a list with the grid styling
   *
   * @param style: style configuration
   */
  getGridStyleList(template: Template) {
    if (template) {
      const divList = [];
      const rowsDefArr = template.gridTemplateAreas.split("' '");
      const style = {};
      if (template.gridTemplateColumns) {
        style["grid-template-columns"] = template.gridTemplateColumns;
        style["-ms-grid-columns"] = style["grid-template-columns"];
      }
      if (template.gridTemplateRows) {
        style["grid-template-rows"] = template.gridTemplateRows;
        style["-ms-grid-rows"] = style["grid-template-rows"];
      }
      const idList = [];

      for (let i = 0; i < rowsDefArr.length; i++) {
        const rowArr = rowsDefArr[i].split(" ");
        for (let y = 0; y < rowArr.length; y++) {
          const cell = rowArr[y].replace(/'/g, "");
          const existingCell = divList.find(x => x.id === cell);
          if (!existingCell) {
            idList.push(cell);
            divList.push({
              id: cell,
              style: {
                "grid-area": cell,
                "border": template.showBorder ? '2px dashed' : '',
                "padding": template.showBorder ? '2px' : '',
                "-ms-grid-row": i + 1,
                "-ms-grid-row-span": 1,
                "-ms-grid-column": y + 1,
                "-ms-grid-column-span": 1
              }
            });
          } else
            existingCell.style["-ms-grid-row"] - 1 === i
              ? existingCell.style["-ms-grid-column-span"]++
              : existingCell.style["-ms-grid-row-span"]++;
        }
      }
      return divList;
    }
    return null;
  }

  /**
   * Set the appropiate css grid attributes for the parent object
   *
   * @param style
   */
  setParentAttributes(template: Template) {
    let parentElement = <HTMLElement>this.el.nativeElement.parentElement;
    if (!parentElement)
      parentElement = <HTMLElement>this.el.nativeElement.parentNode;

    let styleAttrValue = "display:grid;";

    if (template.gridGap)
      styleAttrValue += `grid-gap:${template.gridGap};`;

    if (template.gridTemplateAreas) {
      const gridArea = template.gridTemplateAreas.replace(/'/g, "\"");
      styleAttrValue += `grid-template-areas:${gridArea};`;
    }

    if (template.gridTemplateColumns) {
      styleAttrValue += `grid-template-columns:${
        template.gridTemplateColumns
        };`;
      styleAttrValue += `-ms-grid-columns:${template.gridTemplateColumns};`;
    }

    if (template.gridTemplateRows) {
      styleAttrValue += `grid-template-rows:${template.gridTemplateRows};`;
      styleAttrValue += `-ms-grid-rows:${template.gridTemplateRows};`;
    }

    if (styleAttrValue)
      this.renderer.setAttribute(parentElement, "style", styleAttrValue);
  }
}
