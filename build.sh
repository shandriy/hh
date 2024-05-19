find append/* -type f  > discard

echo "" > main.js
count=0
while read line
do
    cp $line copy
    echo ";" >> copy
    echo "" >> copy
    while read contents
    do
        if [[ "$contents" == "\"use strict\";" ]]
        then
            if [[ "$count" -eq 0 ]]
            then
                count=1
                echo "$contents" >> main.js
            fi
        elif [[ "$contents" == "'use strict';" ]]
        then
            if [[ "$count" -eq 0 ]]
            then
                count=1
                echo "$contents" >> main.js
            fi
        else
            echo "$contents" >> main.js
        fi
    done < "copy"
done < "discard"

uglifyjs main.js -m reserved=[gen] --toplevel > discard
echo "/*! Copyright (C) Konstantin \"entyspite\" Edunov 2024 */" > main.js
cat discard >> main.js

rm discard
rm copy

unset count