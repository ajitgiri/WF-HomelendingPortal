# WFHomelendingPortal
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

@@@ ##### **** ==== STARTED STEPS === **** ##### @@@
Step 1: Create Project 	>> ng new WF-HomelendingPortalUI
Step 2: Add JQuery	   	>> npm install --save jquery
							This is required for the Bootstrap 
							This will also add the JQuery package to package.json.
Step 3: Add Popper	   	>> npm install popper.js --save
							This is required for the Bootstrap 
							This will also add the Popper package to package.json.
Step 4: Add Bootstrap  	>> npm install bootstrap
							This will also add the bootstrap package to package.json.
							The Bootstrap 4 assets will be installed in the node_modules/bootstrap folder.
							
		Now finally add those to angular.json file :
		[{
		 "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.min.js",
              "./node_modules/popper.js/dist/popper.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
		}]
	
Step 5: 
	ng add @angular/material
		* UPDATE package.json (1462 bytes)
		* √ Packages installed successfully.
		* UPDATE src/app/app.module.ts (974 bytes)
		* UPDATE angular.json (4367 bytes)
		* UPDATE src/index.html (541 bytes)
		* UPDATE src/styles.css (181 bytes)
	ng g m commonmaterial [Creating a module to keep all Angular material related modules]
		* CREATE src/app/commonmaterial/commonmaterial.module.ts (200 bytes)
		/**
		 * This is the Common module we create for the Angular Material Components
		 * Instead of massing up material Components in app.module.ts file, will import & Export all modules here 
		 * 
		 * To create the module we use command : ng g m commonmaterial
		 * Now go to the commonmaterial/commonmaterial.module.ts
		 *      Delete common module : @anular/common
		 *      create exports module inside @NgModule like above
		 *      Create 1 constant veriable to define all the imported commonmaterial modules : materialImportExportComponents
		 *      Use this created constant variable in imports and exports part : imports: [ materialImportExportComponents ],
		 * Now go to the app.module.ts, import the created commonmaterial module and decalre inside: imports: CommonmaterialModule 
		 */

Step 6: 
	ng g m authorization  --routing
        CREATE src/app/authorization/authorization.module.ts (308 bytes)
        PS E:\Workspaces\UI-Workspace\WF-HomelendingPortal> ng g c authorization/login
        CREATE src/app/authorization/login/login.component.html (20 bytes)
        CREATE src/app/authorization/login/login.component.spec.ts (552 bytes)
        CREATE src/app/authorization/login/login.component.ts (198 bytes)
        CREATE src/app/authorization/login/login.component.css (0 bytes)
        UPDATE src/app/authorization/authorization.module.ts (388 bytes)
    ng g c authorization/registration
        CREATE src/app/authorization/registration/registration.component.html (27 bytes)
        CREATE src/app/authorization/registration/registration.component.spec.ts (601 bytes)
        CREATE src/app/authorization/registration/registration.component.ts (226 bytes)
        CREATE src/app/authorization/registration/registration.component.css (0 bytes)
        UPDATE src/app/authorization/authorization.module.ts (494 bytes)
    ng g c authorization/profileDetails
        CREATE src/app/authorization/profile-details/profile-details.component.html (30 bytes)
        CREATE src/app/authorization/profile-details/profile-details.component.spec.ts (616 bytes)
        CREATE src/app/authorization/profile-details/profile-details.component.ts (237 bytes)
        CREATE src/app/authorization/profile-details/profile-details.component.css (0 bytes)
        UPDATE src/app/authorization/authorization.module.ts (610 bytes)

Step 7: 
	ng g m portalHome --routing
		CREATE src/app/portal-home/portal-home-routing.module.ts (253 bytes)
		CREATE src/app/portal-home/portal-home.module.ts (297 bytes)

		ng g c portal-home/home
			CREATE src/app/portal-home/home/home.component.html (19 bytes)
			CREATE src/app/portal-home/home/home.component.spec.ts (545 bytes)
			CREATE src/app/portal-home/home/home.component.ts (194 bytes)     
			CREATE src/app/portal-home/home/home.component.css (0 bytes)      
			UPDATE src/app/app.module.ts (884 bytes)
		ng g c portal-home/navBar
			CREATE src/app/portal-home/nav-bar/nav-bar.component.html (22 bytes)
			CREATE src/app/portal-home/nav-bar/nav-bar.component.spec.ts (560 bytes)
			CREATE src/app/portal-home/nav-bar/nav-bar.component.ts (205 bytes)     
			CREATE src/app/portal-home/nav-bar/nav-bar.component.css (0 bytes)      
			UPDATE src/app/app.module.ts (894 bytes)
		ng g c portal-home/footer
			CREATE src/app/portal-home/footer/footer.component.html (21 bytes)
			CREATE src/app/portal-home/footer/footer.component.spec.ts (559 bytes)
			CREATE src/app/portal-home/footer/footer.component.ts (202 bytes)     
			CREATE src/app/portal-home/footer/footer.component.css (0 bytes)      
			UPDATE src/app/portal-home/portal-home.module.ts (822 bytes)

ng g m adminDashboard --routing
	CREATE src/app/admin-dashboard/admin-dashboard-routing.module.ts (257 bytes)
	CREATE src/app/admin-dashboard/admin-dashboard.module.ts (313 bytes)

	ng g c admin-dashboard/adminDashboardHome
		CREATE src/app/admin-dashboard/admin-dashboard-home/admin-dashboard-home.component.html (35 bytes)
		CREATE src/app/admin-dashboard/admin-dashboard-home/admin-dashboard-home.component.spec.ts (645 bytes)
		CREATE src/app/admin-dashboard/admin-dashboard-home/admin-dashboard-home.component.ts (256 bytes)     
		CREATE src/app/admin-dashboard/admin-dashboard-home/admin-dashboard-home.component.css (0 bytes)      
		UPDATE src/app/admin-dashboard/admin-dashboard.module.ts (449 bytes)
	ng g c admin-dashboard/flexlayout        
		CREATE src/app/admin-dashboard/flexlayout/flexlayout.component.html (25 bytes)
		CREATE src/app/admin-dashboard/flexlayout/flexlayout.component.spec.ts (587 bytes)
		CREATE src/app/admin-dashboard/flexlayout/flexlayout.component.ts (218 bytes)     
		CREATE src/app/admin-dashboard/flexlayout/flexlayout.component.css (0 bytes)
		UPDATE src/app/admin-dashboard/admin-dashboard.module.ts (547 bytes)

ng g m volumeRegulator --routing
	CREATE src/app/volume-regulator/volume-regulator.module.ts (317 bytes)
	ng g c volume-regulator/volumeregulatorHome
		CREATE src/app/volume-regulator/volumeregulator-home/volumeregulator-home.component.html (35 bytes)
		CREATE src/app/volume-regulator/volumeregulator-home/volumeregulator-home.component.spec.ts (651 bytes)
		CREATE src/app/volume-regulator/volumeregulator-home/volumeregulator-home.component.ts (257 bytes)
		CREATE src/app/volume-regulator/volumeregulator-home/volumeregulator-home.component.css (0 bytes)
		UPDATE src/app/volume-regulator/volume-regulator.module.ts (455 bytes)
	ng g c volume-regulator/volumeregulatorList
		CREATE src/app/volume-regulator/volumeregulator-list/volumeregulator-list.component.html (35 bytes)
		CREATE src/app/volume-regulator/volumeregulator-list/volumeregulator-list.component.spec.ts (651 bytes)
		CREATE src/app/volume-regulator/volumeregulator-list/volumeregulator-list.component.ts (257 bytes)
		CREATE src/app/volume-regulator/volumeregulator-list/volumeregulator-list.component.css (0 bytes)
		UPDATE src/app/volume-regulator/volume-regulator.module.ts (591 bytes)
	ng g c volume-regulator/volumeregulatorDetails
		CREATE src/app/volume-regulator/volumeregulator-details/volumeregulator-details.component.html (38 bytes)
		CREATE src/app/volume-regulator/volumeregulator-details/volumeregulator-details.component.spec.ts (672 bytes)
		CREATE src/app/volume-regulator/volumeregulator-details/volumeregulator-details.component.ts (269 bytes)
		CREATE src/app/volume-regulator/volumeregulator-details/volumeregulator-details.component.css (0 bytes)
		UPDATE src/app/volume-regulator/volume-regulator.module.ts (739 bytes)


ng g m pqfi --routing                         
	CREATE src/app/pqfi/pqfi-routing.module.ts (247 bytes)
	CREATE src/app/pqfi/pqfi.module.ts (272 bytes)
	
	ng g c pqfi/pqfiHome                          
		CREATE src/app/pqfi/pqfi-home/pqfi-home.component.html (24 bytes)
		CREATE src/app/pqfi/pqfi-home/pqfi-home.component.spec.ts (574 bytes)
		CREATE src/app/pqfi/pqfi-home/pqfi-home.component.ts (213 bytes)     
		CREATE src/app/pqfi/pqfi-home/pqfi-home.component.css (0 bytes)      
		UPDATE src/app/pqfi/pqfi.module.ts (366 bytes)

ng g m hazardException --routing 
	CREATE src/app/hazard-exception/hazard-exception.module.ts (317 bytes)
	ng g c hazard-exception/HazardNotesComentsComponent
		CREATE src/app/hazard-exception/hazard-notes-coments-component/hazard-notes-coments-component.component.html (45 bytes)
		CREATE src/app/hazard-exception/hazard-notes-coments-component/hazard-notes-coments-component.component.spec.ts (709 bytes)
		CREATE src/app/hazard-exception/hazard-notes-coments-component/hazard-notes-coments-component.component.ts (295 bytes)
		UPDATE src/app/hazard-exception/hazard-exception.module.ts (491 bytes)
	ng g c hazard-exception/HazardNotesComents
		CREATE src/app/hazard-exception/hazard-notes-coments/hazard-notes-coments.component.html (35 bytes)
		CREATE src/app/hazard-exception/hazard-notes-coments/hazard-notes-coments.component.spec.ts (645 bytes)
		CREATE src/app/hazard-exception/hazard-notes-coments/hazard-notes-coments.component.ts (256 bytes)
		UPDATE src/app/hazard-exception/hazard-exception.module.ts (625 bytes)
	ng g c hazard-exception/HazardPolicyAgencyInformations
		CREATE src/app/hazard-exception/hazard-policy-agency-informations/hazard-policy-agency-informations.component.html (48 bytes)
		CREATE src/app/hazard-exception/hazard-policy-agency-informations/hazard-policy-agency-informations.component.spec.ts (730 bytes)
		CREATE src/app/hazard-exception/hazard-policy-agency-informations/hazard-policy-agency-informations.component.ts (307 bytes)
		UPDATE src/app/hazard-exception/hazard-exception.module.ts (809 bytes)
	ng g c hazard-exception/HazardPassedEvaluation        
		CREATE src/app/hazard-exception/hazard-passed-evaluation/hazard-passed-evaluation.component.html (39 bytes)
		CREATE src/app/hazard-exception/hazard-passed-evaluation/hazard-passed-evaluation.component.spec.ts (673 bytes)
		CREATE src/app/hazard-exception/hazard-passed-evaluation/hazard-passed-evaluation.component.ts (272 bytes)
		UPDATE src/app/hazard-exception/hazard-exception.module.ts (959 bytes)
	ng g c hazard-exception/HazardHomeOwnerDeclarations
		CREATE src/app/hazard-exception/hazard-home-owner-declarations/hazard-home-owner-declarations.component.html (45 bytes)
		CREATE src/app/hazard-exception/hazard-home-owner-declarations/hazard-home-owner-declarations.component.spec.ts (709 bytes)
		CREATE src/app/hazard-exception/hazard-home-owner-declarations/hazard-home-owner-declarations.component.ts (295 bytes)
		CREATE src/app/hazard-exception/hazard-home-owner-declarations/hazard-home-owner-declarations.component.css (0 bytes)
		UPDATE src/app/hazard-exception/hazard-exception.module.ts (1131 bytes)
	ng g c hazard-exception/HazardFailedEvaluation
		CREATE src/app/hazard-exception/hazard-failed-evaluation/hazard-failed-evaluation.component.html (39 bytes)
		CREATE src/app/hazard-exception/hazard-failed-evaluation/hazard-failed-evaluation.component.spec.ts (673 bytes)
		CREATE src/app/hazard-exception/hazard-failed-evaluation/hazard-failed-evaluation.component.ts (272 bytes)
		CREATE src/app/hazard-exception/hazard-failed-evaluation/hazard-failed-evaluation.component.css (0 bytes)
		UPDATE src/app/hazard-exception/hazard-exception.module.ts (1108 bytes)
	ng g c hazard-exception/HazardXxceptionDetails
		CREATE src/app/hazard-exception/hazard-exception-details/hazard-exception-details.component.html (39 bytes)
		CREATE src/app/hazard-exception/hazard-exception-details/hazard-exception-details.component.spec.ts (673 bytes)
		CREATE src/app/hazard-exception/hazard-exception-details/hazard-exception-details.component.ts (272 bytes)
		CREATE src/app/hazard-exception/hazard-exception-details/hazard-exception-details.component.css (0 bytes)
		UPDATE src/app/hazard-exception/hazard-exception.module.ts (1408 bytes)
	ng g c hazard-exception/DecisionServicePipeline
		CREATE src/app/hazard-exception/decision-service-pipeline/decision-service-pipeline.component.html (40 bytes)
		CREATE src/app/hazard-exception/decision-service-pipeline/decision-service-pipeline.component.spec.ts (680 bytes)
		CREATE src/app/hazard-exception/decision-service-pipeline/decision-service-pipeline.component.ts (276 bytes)
		CREATE src/app/hazard-exception/decision-service-pipeline/decision-service-pipeline.component.css (0 bytes)
		UPDATE src/app/hazard-exception/hazard-exception.module.ts (1562 bytes)

ng g m systemException --routing
	CREATE src/app/system-exception/system-exception-routing.module.ts (258 bytes)
	CREATE src/app/system-exception/system-exception.module.ts (317 bytes)

	ng g c system-exception/systemExceptionHome
		CREATE src/app/system-exception/system-exception-home/system-exception-home.component.html (36 bytes)
		CREATE src/app/system-exception/system-exception-home/system-exception-home.component.spec.ts (652 bytes)
		CREATE src/app/system-exception/system-exception-home/system-exception-home.component.ts (260 bytes)     
		CREATE src/app/system-exception/system-exception-home/system-exception-home.component.css (0 bytes)      
		UPDATE src/app/system-exception/system-exception.module.ts (709 bytes)
	ng g c system-exception/exceptionPipeline 
		CREATE src/app/system-exception/exception-pipeline/exception-pipeline.component.html (33 bytes)
		CREATE src/app/system-exception/exception-pipeline/exception-pipeline.component.spec.ts (637 bytes)
		CREATE src/app/system-exception/exception-pipeline/exception-pipeline.component.ts (249 bytes)
		CREATE src/app/system-exception/exception-pipeline/exception-pipeline.component.css (0 bytes)
		UPDATE src/app/system-exception/system-exception.module.ts (447 bytes)
	ng g c system-exception/exceptionDetails
		CREATE src/app/system-exception/exception-details/exception-details.component.html (32 bytes)
		CREATE src/app/system-exception/exception-details/exception-details.component.spec.ts (630 bytes)
		CREATE src/app/system-exception/exception-details/exception-details.component.ts (245 bytes)
		CREATE src/app/system-exception/exception-details/exception-details.component.css (0 bytes)
		UPDATE src/app/system-exception/system-exception.module.ts (571 bytes)