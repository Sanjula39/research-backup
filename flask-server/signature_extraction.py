import cv2
import numpy as np
from flask import jsonify

def extract_signature(image_path, output_path):
    # Load the certificate image
    image = cv2.imread(image_path)

    # Convert the image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Define the region of interest (ROI) as the bottom half of the image
    roi_height = image.shape[0] // 2
    roi = gray[roi_height:, :]

    # Apply adaptive thresholding to create a binary image for the ROI
    _, binary = cv2.threshold(roi, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

    # Find contours in the binary image
    contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Filter contours based on area and aspect ratio
    filtered_contours = []
    for contour in contours:
        area = cv2.contourArea(contour)
        x, y, w, h = cv2.boundingRect(contour)
        aspect_ratio = w / float(h)

        # Adjust the area and aspect ratio thresholds as per your requirements
        if area > 500 and aspect_ratio < 5:
            filtered_contours.append(contour)

    # Sort filtered contours based on area (largest to smallest)
    filtered_contours = sorted(filtered_contours, key=cv2.contourArea, reverse=True)

    # Exclude contours that intersect with other elements (e.g., seals or logos)
    signature_contour = None
    for contour in filtered_contours:
        x, y, w, h = cv2.boundingRect(contour)
        if not intersects_seals(image, x, y + roi_height, w, h) and not contains_red_pixels(image, x, y + roi_height, w, h):
            signature_contour = contour
            break

    if signature_contour is not None:
        # Get the bounding rectangle of the signature contour
        x, y, w, h = cv2.boundingRect(signature_contour)

        # Extract the signature region from the grayscale image
        signature = gray[y + roi_height:y + roi_height + h, x:x + w]

        # Save the signature as a separate image
        cv2.imwrite(output_path, signature)
        print("Signature extracted & saved successfully.")
        return True
    else:
        print("No signature found in the image.")
        return False


def intersects_seals(image, x, y, w, h):
    # Implement your logic to check if the signature intersects with other elements (e.g., seals or logos)
    # You can use techniques like color-based segmentation or contour intersection analysis
    # Return True if there is an intersection, False otherwise
    return False


def contains_red_pixels(image, x, y, w, h):
    # Get the region of interest in the image
    roi = image[y:y + h, x:x + w]

    # Convert the ROI to the HSV color space
    hsv = cv2.cvtColor(roi, cv2.COLOR_BGR2HSV)

    # Define the red color range in HSV color space
    lower_red = np.array([0, 100, 100])
    upper_red = np.array([10, 255, 255])

    # Create a mask for red pixels in the ROI
    mask = cv2.inRange(hsv, lower_red, upper_red)

    # Check if the mask has any white pixels indicating the presence of red pixels
    return cv2.countNonZero(mask) > 0



