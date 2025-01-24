import math

def aire_cercle(rayon):
    return math.pi * rayon ** 2

def perimetre_rectangle(longueur, largeur):
    return 2 * (longueur + largeur)

if __name__ == "__main__":
    rayon = float(input("Entrez le rayon du cercle: "))
    longueur = float(input("Entrez la longueur du rectangle: "))
    largeur = float(input("Entrez la largeur du rectangle: "))

    print(f"L'aire du cercle est: {aire_cercle(rayon):.2f}")
    print(f"Le périmètre du rectangle est: {perimetre_rectangle(longueur, largeur):.2f}")
