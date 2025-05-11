Content Overview:

Data Loading & Cleaning

Merge patient, vitals, and diagnostics datasets.

Handle missing values, duplicates, and inconsistent formats.

Descriptive Statistics

Summary of age, weight, hemoglobin, blood pressure, etc.

Histograms and boxplots to understand distributions.

Trend & Correlation Analysis

Correlation heatmap of vitals and diagnostics.

Time-series analysis of patient vitals.

Trend detection in high-risk indicators (e.g., anemia, hypertension).

Anomaly Detection

Identify patients with abnormal hemoglobin or BP levels.

Highlight those needing urgent follow-up.

Visualizations

📈 Line charts: Vital signs over time.

📊 Bar plots: Conditions across districts.

🧠 Heatmaps: Correlations among health parameters.

📍 Scatter plots: Diagnostics vs. vital stats.


Code
import pandas as pd
import zipfile
import os

# Unzip uploaded dataset
zip_path = "/mnt/data/data_set.zip"
extract_path = "/mnt/data/extracted_data"

with zipfile.ZipFile(zip_path, 'r') as zip_ref:
    zip_ref.extractall(extract_path)

# List extracted files
extracted_files = os.listdir(extract_path)
extracted_files
