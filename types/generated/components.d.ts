import type { Schema, Struct } from '@strapi/strapi';

export interface RecipieIngredients extends Struct.ComponentSchema {
  collectionName: 'components_recipie_ingredients';
  info: {
    description: '';
    displayName: 'Recipe Ingredients';
    icon: 'check';
  };
  attributes: {
    name: Schema.Attribute.Relation<'oneToOne', 'api::ingredient.ingredient'>;
    quantity: Schema.Attribute.String;
    replaceable_ingredients: Schema.Attribute.Component<
      'recipie.replaceable-ingredients',
      true
    >;
    unit: Schema.Attribute.Enumeration<
      ['gram,', 'ml,', 'tbsp,', 'cup,', 'to taste']
    >;
  };
}

export interface RecipieNutrientInfo extends Struct.ComponentSchema {
  collectionName: 'components_recipie_nutrient_infos';
  info: {
    description: '';
    displayName: 'Nutrient Info';
    icon: 'chartCircle';
  };
  attributes: {
    nutrient_name: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface RecipieReplaceableIngredients extends Struct.ComponentSchema {
  collectionName: 'components_recipie_replaceable_ingredients';
  info: {
    displayName: 'Replaceable Ingredients';
  };
  attributes: {
    alternative_ingredient_name: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'recipie.ingredients': RecipieIngredients;
      'recipie.nutrient-info': RecipieNutrientInfo;
      'recipie.replaceable-ingredients': RecipieReplaceableIngredients;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
