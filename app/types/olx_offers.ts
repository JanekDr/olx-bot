export default interface OlxOffer {
  id: number;
  url: string;
  title: string;
  last_refresh_time: string;
  created_time: string;
  valid_to_time: string;
  pushup_time?: string | null;
  description: string;
  promotion: {
    highlighted: boolean;
    urgent: boolean;
    top_ad: boolean;
    options: string[];
    b2c_ad_page: boolean;
    premium_ad_page: boolean;
  };
  params: {
    key: string;
    name: string;
    type: string;
    value?: {
      key?: string | number | null;
      label?: string | null;
      value?: number | null; // For numeric values like price
      type?: string; // For price-specific attributes
      arranged?: boolean;
      budget?: boolean;
      currency?: string | null;
      negotiable?: boolean;
      converted_value?: number | null;
      previous_value?: number | null;
      converted_previous_value?: number | null;
      converted_currency?: string | null;
    };
  };
}
