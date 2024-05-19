find append/* -type f  > discard
echo "{\"compilerOptions\":{\"outFile\":\"main.js\",\"declaration\":false,\"allowJs\":true},\"files\":[" > tsconfig.json

while read line
do
  echo "\"$line\"," >> tsconfig.json
done < "discard"
echo "]}" >> tsconfig.json

npx tsc -t es5 -p tsconfig.json

uglifyjs main.js -m reserved=[gen] --toplevel > discard
echo "/*! Copyright (C) Konstantin \"entyspite\" Edunov 2024 */" > main.js
cat discard >> main.js

rm discard