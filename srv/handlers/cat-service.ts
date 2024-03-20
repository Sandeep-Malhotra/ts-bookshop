import cds from "@sap/cds";

export class CatalogService extends cds.ApplicationService {
  async init() {
    console.log("init here");
    debugger;

    const { Books } = await import("#cds-models/CatalogService");
    this.before(["READ"], Books, async (req: any) => {
      console.log("debugger not hit");
      debugger;
      return {
      };
    });
    return super.init();
  }
}

// module.exports = {
//   EmployeeService,
// };
