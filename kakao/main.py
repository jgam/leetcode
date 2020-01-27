class Car():
    def __init__(self, **kwargs):
        self.wheels = 4
        self.doors = 4
        self.windows = 4
        self.seats = 4
        self.color = kwargs.get("color", "black")
        self.price = kwargs.get("price", "$20")

    def __str__(self):
        return f"Car with {self.wheels} wheels"


class Convertible(Car):  # extend
    def __init__(self, **kwargs):
        super().__init__(**kwargs)  # 부모의 method에 기능을 추가하고싶을때 (그대로 받아오고 나머지 기능을 추가)
        self.tile = kwargs.get("time", 10)

    def take_off(self):
        return "taking off"

    def __str__(self):  # 부모의 method를 재정의(override)
        return f"Car with no roof"


porche = Convertible(color="green", price="$40")
print(porche.take_off())
print(porche)
print(porche.color)
