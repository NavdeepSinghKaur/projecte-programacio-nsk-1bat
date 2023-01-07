from colorama import Back

array_nota_final = []

def entrada(nom, multiplicador):

    item = float(input(f'nota de {nom}: '))    

    while (item > 10 or item < 0): 
        item = float(input(f'la nota de {nom} no està entre 0 i 10 torna a escriure-la: '))

    array_nota_final.append(item*multiplicador)
    
entrada("examen", 0.4)
entrada("exercici", 0.1)
entrada("pràctica", 0.2)
entrada("projecte", 0.2)
entrada("actitud", 0.1)

suma_final = round(sum(array_nota_final), 2)

if suma_final >= 9: print(Back.BLUE + "\n"*10 + f'{suma_final}')

elif suma_final < 9 and suma_final >= 7: print(Back.GREEN + "\n"*10 + f'{suma_final}')

elif suma_final < 7 and suma_final >= 5: print(Back.YELLOW + "\n"*10 + f'{suma_final}')

else: print(Back.RED + "\n"*10 + f'{suma_final}')