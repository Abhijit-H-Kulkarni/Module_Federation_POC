# Module_Federation_POC
This repo demonstrates module federation in webpack V5.

## Steps to run.
# 1. Angular App :
- ``npm run build``
- ``npm run serve:dist``
- Navigate to shell at http://localhost:5000 (Federated Module)
- Navigate to standalone microfrontend at http://localhost:3000 

# 2. React App1 : (Standalone Application)
- ``cd React_App1``
- ``npm start`` (Builds and Starts the server on port 3001)

# 3. React App2 : (Standalone Application)
- ``cd React_App2``
- ``npm start`` (Builds and Starts the server on port 3002)

# 4. React App3 : (Federated from React_App1 and React_App2)
- ``cd React_App3``
- ``npm start`` (Builds and Starts the server on port 3003)

# 5. Host_Container : 
- ``cd Host_Container``
- ``node .\server.js``
