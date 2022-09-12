import time

tiempo = time.time()
tiempo = time.localtime(tiempo)

hora_local = tiempo.tm_hour

if hora_local >= 19:
    print("Es hora de ir a casa")
else:
    print(f"Quedan {19 - hora_local} horas de trabajo")
