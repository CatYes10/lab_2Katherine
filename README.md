This project is a web application developed in Angular that allows for complete management of package shipments, including order creation, status updates, and tracking.
The main objective is to practice web design, user experience, and the use of reactive forms in Angular.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Site Description

  The app has three main screens:

  Order Creation
  Record package and sender information.
  Required fields:
  Sender's full name (letter only, minimum 3 and maximum 50 characters).
  Delivery address (minimum 10 and maximum 100 characters).
  Valid email address (Gmail or Outlook only).
  Package description (minimum 40 and maximum 120 characters).
  Upon completion, it generates:
  Unique package number.
  12-character tracking ID for tracking.
  Success and error messages via pop-ups/modals.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Update Order

  Allows you to search for a package by order number.
  Once uploaded, you can update:
  Package status (In Preparation, In Transit, Delivered, Canceled).
  Comment on the update (20-40 characters).
  Person responsible for the update (letters only).
  Each update is logged in a history.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Package Tracking

  Allows you to view the complete update history for a package.
  They are displayed in ascending order by date:
  Update date.
  Comment logged.
  Change maintainer.
  Only the package tracking ID is required.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Technologies used

  Angular (TypeScript, Reactive Forms)
  HTML5 and CSS3
  Bootstrap 5 and Bootstrap Icons (for additional styling)
  Custom modal for alert messages
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  How to install it?
  Open your terminal (or Command Prompt/PowerShell on Windows) and run the following command: npm install -g @angular/cli
  Navigate to the Project Location 

  Run the ng new command, followed by the name you want to give your project. ng new project-angular.
  Navigate to the Project Directory cd project-angular  
  
  Initialize your program 
  Run the ng serve command and it will give you the address that you should paste into your browser.

