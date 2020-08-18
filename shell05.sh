#!/bin/bash

echo "Entre com um diretorio:"
read FILE

if [ -f "$FILE" ]
    then
        echo "$FILE é um arquivo comum"
elif [ -d "$FILE" ]
    then
        echo  "$FILE é um diretorio"
else
    echo "$FILE é alguma outra coisa"

fi

ls -l $FILE