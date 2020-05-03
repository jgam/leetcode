class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        #n = 3

        # n = 1
        # ()

        # n = 2 => "()"+fn(1),fn(1) + "()", (fn(1))  - ()()// ()(), (())

        # n = 3 => "()"+fn(2),fn(2) + "()", (fn(2)) - ()()() // ()()(), (())(), (()()), ((())), ()(())

        # n =4 => fn(3)+"()", "()"+fn(3), (fn(3))

        # 4. 13 22 31

        # 8 44 => 22,22
        # *********dp

        # backgracking---------
        answer = []

        def generate(current, open_var, close_var):
            if open_var == 0 and close_var == 0:
                answer.append(current)
            if open_var > 0:
                generate(current+'(', open_var-1, close_var)

            if close_var > open_var:
                generate(current + ')', open_var, close_var-1)

        generate('(', n-1, n)
        return answer
