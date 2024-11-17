export interface ColorResult {
  palette_Name: string;
  palette_Description: string;
  recommended_colors: {
    color_name: string;
    hex_code: string;
    usage: string;
    description: string;
  }[];
  colors_to_avoid: {
    color_name: string;
    hex_code: string;
    reason: string;
  }[];
}