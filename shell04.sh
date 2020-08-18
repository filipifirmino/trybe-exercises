#! /bin/bash
DIRETORIO="/home/filipi/trybe/bash/shell_exercice/shell01.sh"

if [ -e "$DIRETORIO" ]
then
    echo "O caminho $DIRETORIO está habilitado!"
    if [ -w "$DIRETORIO" ]
    then
        echo "Você tem permissão para editar $DIRETORIO"
    else
        echo "Você NÃO foi autorizado a editar $DIRETORIO"
    fi  
else
    echo "O caminho $DIRETORIO não está habilitado ou não existe"
fi