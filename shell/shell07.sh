#!/bin/bash

DIRETORIO=$1
if [ -d "$DIRETORIO" ]
    then
    ARQUIVO=`ls -l $DIRETORIO | wc -l`
    echo "O $DIRETORIO tem $ARQUIVO arquivos."
else
    echo "O parametro $DIRETORIO não é um caminho valido"
fi