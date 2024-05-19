find append/* -type f  > discard

echo "" > main.js
while read line
do
  cp $line copy
  echo ";" >> copy
  echo "" >> copy
  while read contents
  do
    echo "$contents" >> main.js
  done < "copy"
done < "discard"

uglifyjs main.js -m reserved=[gen] --toplevel > discard
echo "/*! Copyright (C) Konstantin \"entyspite\" Edunov 2024 */" > main.js
cat discard >> main.js

rm discard
rm copy