import Placeholder from "./placeholder";
import Page from "./Page/page";
import TextBlock from "./TextBlock";

interface IComponentList {
  [index: string]: any;
}

const withComponentList = (type: string) => (componentList: IComponentList) => {
  if (typeof componentList[type] === "undefined") {
    return componentList["placeholder"];
  } else {
    return componentList[type];
  }
};

const Components = (type: string) => withComponentList(type)(ComponentList); // withComponentList('web-ui-text-block')(ComponentList)

const LocalComponentList = {
  placeholder: Placeholder,
  page: Page,
  "text-block": TextBlock,
};

const ComponentList = {
  ...LocalComponentList,
};

export default Components;
