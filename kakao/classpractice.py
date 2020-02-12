#classpractice

class Character:
    def __init__(self, name="yourname", health_point=100,striking_power=3, defensive_power=3):
        self.name = name
        self.health_point = health_point
        self.striking_power = striking_power
        self.defensive_power = defensive_power
    def get_info(self):
        print(self.name, self,health_point, self.striking_power, self.defensive_power)


#warrior = Character('james',100,3,1)


class Warrior(Character):
    def attack(self,opponent):
        print('stabbed with a knife')
        opponent.receive(self.striking_power)
    def receive(self,striking_power):
        if (self.health_point - striking_power) <= 0:
            print(self.name + ' Died')
        self.health_point -= striking_power

class Elf(Character):
    def __init__(self, name='yourname', health_point=100, striking_power=3, defensive_power=3):
        super().__init__(name, health_point, striking_power, defensive_power)
        self.manteau = 0
    def attack(self, opponent):
        print('used magic!')
        opponent.receive(self.striking_power)
    def receive(self, striking_poewr):
        if(self.health_point - striking_poewr) <= 0:
            print(self.name + ' died')
        self.health_point -= striking_poewr
    def wear_manteau():
        #block the attack
        self.manteau += 1
        pass

class Wizard(Character):
    def attack(self, opponent):
        print('used magic!')
        opponent.receive(self.striking_power)
    def receive(self, striking_power):
        if(self.health_point - striking_power) <= 0:
            print(self.name + ' died')
        self.health_point -= striking_power
    def use_wizard(self):
        print('used wizard ability')
        self.health_point += 3

warrior = Warrior('james',100,3,1)
elf = Elf('jinling',100,1,3)
wizard = Wizard('devil',50,2,2)
#print(warrior.name)

warrior.attack(wizard)

for i in range(20):
    warrior.attack(wizard)