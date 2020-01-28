def solution(answers):
    scores = [0, 0, 0]
    answer = []
    pattern1 = range(1, 6)
    pattern2 = [2, 1, 2, 3, 2, 4, 2, 5]
    pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    for i in range(len(answers)):
        if answers[i] == pattern1[i % len(pattern1)]:
            scores[0] += 1
        if answers[i] == pattern2[i % len(pattern2)]:
            scores[1] += 1
        if answers[i] == pattern3[i % len(pattern3)]:
            scores[2] += 1

    max_score = max(scores)
    for i in range(3):
        if scores[i] == max_score:
            answer.append(i + 1)

    return answer
