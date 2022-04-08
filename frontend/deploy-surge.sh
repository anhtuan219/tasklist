# Build project
npm run build

# Move to build folder
cd build

# Clone index.html into 200.html for surge redirect when using react router or connected-react-router
cp index.html 200.html

# Deploy current folder (. - build folder) to surge
surge . tasklisttuan219.surge.sh