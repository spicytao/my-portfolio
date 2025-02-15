import cv2
import numpy as np
import json

# 读取黑白图像
image_path = "your_image.png"  # 这里改成你的图片文件路径
image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)

# 设置阈值，只保留亮度较高的像素（高光）
threshold = 200
_, binary = cv2.threshold(image, threshold, 255, cv2.THRESH_BINARY)

# 获取高光点的坐标
particle_coords = np.column_stack(np.where(binary == 255))

# 归一化到 [-1, 1] 区间，以适配 Three.js
height, width = image.shape
normalized_coords = [[(x / width) * 2 - 1, -((y / height) * 2 - 1)] for y, x in particle_coords]

# 保存为 JSON 文件
output_path = "particles.json"
with open(output_path, "w") as f:
    json.dump(normalized_coords, f)

print(f"提取完成！共 {len(normalized_coords)} 个粒子，已保存到 {output_path}")
